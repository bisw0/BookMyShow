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
public class ShowSeatType extends BaseEntity {
    @ManyToOne
    private Show show;

    @Enumerated(EnumType.STRING)
    private SeatType seatType;

    private int price;
}
