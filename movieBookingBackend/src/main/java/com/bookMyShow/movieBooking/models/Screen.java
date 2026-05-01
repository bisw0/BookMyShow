package com.bookMyShow.movieBooking.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Enumerated;
import jakarta.persistence.EnumType;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Entity
public class Screen extends BaseEntity {
    @Enumerated(EnumType.STRING)
    private ScreenType screenType;

    @ManyToOne
    private Theatre theatre;

    @OneToMany(mappedBy = "screen")
    private List<Seat> seats;
}
