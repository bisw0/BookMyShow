package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@Entity
public class ShowSeat extends BaseEntity {
    @ManyToOne
    private Seat seat;

    @ManyToOne
    private Show show;

    @Enumerated(EnumType.STRING)
    private SeatStatus seatStatus;

    private LocalDateTime blockedAt;
}
