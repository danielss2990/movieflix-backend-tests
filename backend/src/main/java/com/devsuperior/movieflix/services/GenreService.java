package com.devsuperior.movieflix.services;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.movieflix.dto.GenreDTO;
import com.devsuperior.movieflix.entities.Genre;
import com.devsuperior.movieflix.repositories.GenreRepository;
import com.devsuperior.movieflix.services.exceptions.ResourceNotFoundException;

@Service
public class GenreService {
	
	@Autowired
	private GenreRepository repository;
	
	@Transactional(readOnly = true)
	public GenreDTO findById(Long id) {
		
		Optional<Genre> obj = repository.findById(id);
		Genre entity = obj.orElseThrow(() -> new ResourceNotFoundException("Genêro não Encontrado"));
		
		return new GenreDTO(entity, entity.getMovies());
	}
	
	@Transactional(readOnly = true)
	public List<GenreDTO> findAll(){			
		List<Genre> list = repository.findAll();
		return list.stream().map(x -> new GenreDTO(x)).collect(Collectors.toList());		
	}
	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPaged(PageRequest pageRequest){			
		Page<Genre> list = repository.search( pageRequest);		
		return  list.map(x -> new GenreDTO(x));		
	}
	
	@Transactional(readOnly = true)
	public Page<GenreDTO> findAllPaged2(PageRequest pageRequest){			
		Page<Genre> list = repository.search( pageRequest);		
		return  list.map(x -> new GenreDTO(x,x.getMovies()));		
	}
}
