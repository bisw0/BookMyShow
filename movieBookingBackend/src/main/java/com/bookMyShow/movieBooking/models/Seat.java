package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Seat extends BaseEntity {
    private String rowNum;
    private int seatNo;

    @Enumerated(EnumType.STRING)
    private SeatType seatType;

    @ManyToOne
    private Screen screen;
}
