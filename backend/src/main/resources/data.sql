INSERT INTO tb_user (name, email, password) VALUES ('Alex Brown', 'alex@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Maria Green', 'maria@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Ana Yellow', 'ana@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');
INSERT INTO tb_user (name, email, password) VALUES ('Bob Blue', 'bob@gmail.com', '$2a$10$eACCYoNOHEqXve8aIWT8Nu3PkMXWBaOxJ9aORUYzfMQCbVBIhZ8tG');

INSERT INTO tb_role (authority) VALUES ('ROLE_VISITOR');
INSERT INTO tb_role (authority) VALUES ('ROLE_MEMBER');

INSERT INTO tb_user_role (user_id, role_id) VALUES (1, 1);
INSERT INTO tb_user_role (user_id, role_id) VALUES (2, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (3, 2);
INSERT INTO tb_user_role (user_id, role_id) VALUES (4, 1);

INSERT INTO tb_genre (name) VALUES ('Ação');
INSERT INTO tb_genre (name) VALUES ('Aventura');
INSERT INTO tb_genre (name) VALUES ('Scifi');
INSERT INTO tb_genre (name) VALUES ('Cartoon');

INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Bad Boys 1','Primeiro Filme',1995,'https://image.tmdb.org/t/p/w500_and_h282_face/azc8Wx2Z7KxNM8ogJ0qhcyuVOCp.jpg','Os policiais Burnett (Martin Lawrence) e Lowrey (Will Smith) são encarregados de encontrar um carregamento de heroína que foi roubado. Uma testemunha liga para a delegacia dizendo ser capaz de identificar o ladrão.',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Bad Boys 2','Segundo Filme',2003,'https://image.tmdb.org/t/p/w500_and_h282_face/jNGj5kw65X2tpx7ffRsuxunPjrC.jpg','Os detetives da Narcóticos Marcus Burnett (Martin Lawrence) e Mike Lowrey (Will Smith) foram designados para investigar a proliferação do ecstasy na cidade de Miami. As investigações os levam a um alvo maior, Johnny Tapia (Jordi Mollà)',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Bad Boys Para Sempre','Terceiro Filme',2020,'https://image.tmdb.org/t/p/w500_and_h282_face/3N316jUSdhvPyYTW29G4v9ebbcS.jpg','Armando é um assassino de sangue frio com uma natureza cruel e provocadora. Ele está comprometido com o trabalho do cartel e é enviado por sua mãe para matar Mike (Smith).',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores','Primeiro Filme',2012,'https://image.tmdb.org/t/p/w500_and_h282_face/qJQknP1F9R4pS5qiOuvpIUuWam4.jpg','Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz.',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores','Primeiro Filme',2012,'https://image.tmdb.org/t/p/w500_and_h282_face/qJQknP1F9R4pS5qiOuvpIUuWam4.jpg','Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz.',2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores','Primeiro Filme',2012,'https://image.tmdb.org/t/p/w500_and_h282_face/qJQknP1F9R4pS5qiOuvpIUuWam4.jpg','Loki, o irmão de Thor, ganha acesso ao poder ilimitado do cubo cósmico ao roubá-lo de dentro das instalações da S.H.I.E.L.D. Nick Fury, o diretor desta agência internacional que mantém a paz.',3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Era de Ultron','Segundo Filme',2015,'https://image.tmdb.org/t/p/w500_and_h282_face/5a3ltZ3is7GOxGJtGkBy06kQ98z.jpg','Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron.',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Era de Ultron','Segundo Filme',2015,'https://image.tmdb.org/t/p/w500_and_h282_face/5a3ltZ3is7GOxGJtGkBy06kQ98z.jpg','Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron.',2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Era de Ultron','Segundo Filme',2015,'https://image.tmdb.org/t/p/w500_and_h282_face/5a3ltZ3is7GOxGJtGkBy06kQ98z.jpg','Ao tentar proteger o planeta de ameaças, Tony Stark constrói um sistema de inteligência artificial que cuidaria da paz mundial. O projeto acaba dando errado e gera o nascimento do Ultron.',3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Ultimato','Quarto Filme',2019,'https://image.tmdb.org/t/p/w500_and_h282_face/2xfV5Zdq4kCsFVReRXJKnJaUFCD.jpg','Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos.',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Ultimato','Quarto Filme',2019,'https://image.tmdb.org/t/p/w500_and_h282_face/2xfV5Zdq4kCsFVReRXJKnJaUFCD.jpg','Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos.',2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Ultimato','Quarto Filme',2019,'https://image.tmdb.org/t/p/w500_and_h282_face/2xfV5Zdq4kCsFVReRXJKnJaUFCD.jpg','Após os eventos devastadores de "Vingadores: Guerra Infinita", o universo está em ruínas devido aos esforços do Titã Louco, Thanos.',3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Guerra Infinita','Terceiro Filme',2018,'https://image.tmdb.org/t/p/w500_and_h282_face/uwUyqV23JAdTkR3lOGdCZ6NP9wg.jpg','Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.',1);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Guerra Infinita','Terceiro Filme',2018,'https://image.tmdb.org/t/p/w500_and_h282_face/uwUyqV23JAdTkR3lOGdCZ6NP9wg.jpg','Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.',2);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Vingadores: Guerra Infinita','Terceiro Filme',2018,'https://image.tmdb.org/t/p/w500_and_h282_face/uwUyqV23JAdTkR3lOGdCZ6NP9wg.jpg','Homem de Ferro, Thor, Hulk e os Vingadores se unem para combater seu inimigo mais poderoso, o maligno Thanos.',3);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Tom e Jerry Rumo a Marte','Primeiro Filme',2005,'https://image.tmdb.org/t/p/w500_and_h282_face/rFi6HNhjuVc4xhAFLV9w2wMbNjR.jpg','om e Jerry entram de gaiatos na primeira missão tripulada ao planeta Marte e acabam descobrindo que não estamos sós: os marcianos existem!',4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Os Jovens Titãs em Ação Vs Os Jovens Titãs','O Filme',2019,'https://image.tmdb.org/t/p/w500_and_h282_face/rSnZakJNnwb2QKZazCxQjrgLZRO.jpg','A nova animação mostra os heróis se enfrentando em uma arena apenas para descobrirem que estão sendo manipulados por uma dupla de Trigons.',4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Monstros S.A.','O Filme',2001,'https://image.tmdb.org/t/p/w500_and_h282_face/zm2TdlAESUrkSIV28eWJzuoo8fL.jpg','Sulley e seu falante assistente Mike trabalham na Monstros S.A., a maior fábrica de processamento de gritos de Monstrópolis. A principal fonte de energia do mundo dos monstros.',4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Divertida Mente','O Filme',2015,'https://image.tmdb.org/t/p/w500_and_h282_face/sHyFU2YClCCmKnKGGgSlnqlzOrJ.jpg','Depois que a jovem Riley é retirada de sua vida no meio-oeste americano e se mudou para São Francisco, suas emoções - alegria, medo, raiva, nojo e tristeza.',4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Toy Story','Um mundo de aventuras',1995,'https://image.tmdb.org/t/p/w500_and_h282_face/w620zb5fZW0QBQlM8pZwftzBaJj.jpg','Quando um reluzente ranger do espaço chamado Buzz Lightyear invade o mundo de um cowboy de corda chamado Woody, desencadeia uma hilariante briga entre brinquedos.',4);
INSERT INTO tb_movie (title, sub_Title, year, img_Url, synopsis, genre_id) VALUES ('Toy Story','Segundo Filme',1999,'https://image.tmdb.org/t/p/w500_and_h282_face/91qfG6VaxRsCh1SbIi1w2vxknsL.jpg','Enquanto Andy está no acampamento de férias, um ganancioso colecionador de brinquedos rapta Woody. Antes que se possa dizer "ao infinito e além", Buzz Lightyear, o Sr. Cabeça de Batata.',4);

INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse Filme é muito massa! Foi o filme que lançou Will',1,1);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Bom demais!!! Bad Boys Forever!!',1,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Esse filme é muito violento!',1,3);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('A trilha sonora do filme é épica!!!',7,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Marvel Forever!!!!',7,4);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Ri demais',7,2);
INSERT INTO tb_review (text, movie_id, user_id) VALUES ('Vo mais de 3 vezes, vale a pena',4,3);



