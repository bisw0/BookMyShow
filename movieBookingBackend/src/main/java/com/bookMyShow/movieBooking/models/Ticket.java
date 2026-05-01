package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Ticket extends BaseEntity {
    @ManyToOne
    private Show show;

    @ManyToOne
    private User user;

    @ManyToMany
    private List<ShowSeat> showSeats;

    @OneToOne
    private Payment payment;

    @Enumerated(EnumType.STRING)
    private BookingStatus status;
}
