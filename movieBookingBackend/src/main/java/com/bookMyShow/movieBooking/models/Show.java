package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "movie_show")
public class Show extends BaseEntity {
    @ManyToOne
    private Movie movie;

    @ManyToOne
    private Screen screen;

    private LocalDateTime startTime;
    private LocalDateTime endTime;

    @OneToMany(mappedBy = "show")
    private List<ShowSeat> showSeats;

    @OneToMany(mappedBy = "show")
    private List<ShowSeatType> showSeatTypes;
}
