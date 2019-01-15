USE eu3i0k3a1in6bsbq;

CREATE TABLE burgers
(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name varchar(75) NOT NULL,
    devoured BOOLEAN default false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);