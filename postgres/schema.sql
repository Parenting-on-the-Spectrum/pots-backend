CREATE DATABASE spectrum;

CREATE TABLE leaders (
      leader_id serial PRIMARY KEY,
      Name text NOT NULL,
      title text NOT NULL,
      postNomials text[],
      picture text not null
    );