package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Movie extends BaseEntity {
    private String name;
    private int durationInMinutes;

    @Enumerated(EnumType.STRING)
    private MovieType movieType;

    @Enumerated(EnumType.STRING)
    private MovieSupport movieSupport;
}
