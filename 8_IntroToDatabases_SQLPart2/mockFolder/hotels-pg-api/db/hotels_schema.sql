DROP DATABASE IF EXISTS learn_hotels;
CREATE DATABASE learn_hotels;

\c learn_hotels

CREATE TABLE hotels (
    id SERIAL PRIMARY KEY, 
    name TEXT, 
    city TEXT, 
    state TEXT, 
    pets BOOLEAN, 
    rating numeric DEFAULT 5, 
    CHECK (rating >= 0 AND rating <= 5)
    );
