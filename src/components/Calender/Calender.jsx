import { Chip, Box, Button, Divider, Stack, Typography } from '@mui/material';
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Calender.css";
import { format, add, isEqual, startOfDay } from "date-fns";
import next from "../../assets/next.png";
import prev from "../../assets/prev.png";
import styled from "@emotion/styled";

function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <Box
            component='img'
            src={prev}
            onClick={() => swiper.slidePrev()}
            height={48}
            width={48}
            position='absolute'
            left={0}
            top={0}
            sx={{ cursor: 'pointer' }}
            zIndex={999}
            bgcolor='#fff'
        ></Box>
    );
}

function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <Box
            component='img'
            src={next}
            onClick={() => swiper.slideNext()}
            height={48}
            width={48}
            position='absolute'
            right={0}
            top={0}
            sx={{ cursor: 'pointer' }}
            zIndex={999}
            bgcolor='#fff'
        ></Box>
    );
}


function DaySelector({ selectedDate, setSelectedDate, totalSlots }) {

    const date = startOfDay(new Date())
    const dateItems = []

    for (let i = 0; i < 7; i++) {
        dateItems.push(add(date, { days: i }))
    }

    const customDateFormat = day => {
        if (isEqual(date, day)) {
            return 'Today'
        }
        else if (isEqual(date, add(day, { days: -1 }))) {
            return 'Tomorrow'
        }
        else {
            return format(day, 'E, d LLL')
        }
    }

    const handleClick = (day) => {
        setSelectedDate(day)
    }

    return (
        <Stack pt={3} position='relative'>
            <Divider sx={{ mb: 3 }} />
            <Swiper
                slidesPerView={4}
                loop={false}
                spaceBetween={11}
                className={styles.swiperStyles}
                breakpoints={{
                    767: {
                        spaceBetween: 30,
                        slidesPerView: 3
                    }
                }}
            >
                {dateItems.map((day, index) => (
                    <SwiperSlide key={index} className={styles.swiperslide}>
                        <Stack
                            textAlign='center'
                            onClick={() => handleClick(day)}
                            sx={{ cursor: 'pointer' }}
                        >
                            <Typography
                                fontWeight={isEqual(day, selectedDate) ? 700 : 400}
                                fontSize={{ xs: 11, md: 16 }}
                            >
                                {customDateFormat(day)}
                            </Typography>
                            <Typography fontSize={{ xs: 8, md: 12 }} color='primary.green'>
                                {`${totalSlots} Slots Available`}
                            </Typography>

                            <Box
                                height={{ xs: '4px', md: '5px' }}
                                width={{ xs: 1, md: 'calc(100% - 50px)' }}
                                position='relative'
                                bottom='0'
                                bgcolor={isEqual(day, selectedDate) ? 'primary.main' : 'rgba(0,0,0,0)'}
                                left={0}
                                zIndex={999}
                                mt='5px'
                                mx='auto'
                            >
                            </Box>

                        </Stack>
                    </SwiperSlide>
                ))}

                <span slot="container-start">
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <SlidePrevButton />
                    </Box>
                </span>

                <span slot="container-end">
                    <Box display={{ xs: 'none', md: 'block' }}>
                        <SlideNextButton />
                    </Box>
                </span>
            </Swiper>

            <Box
                height={{ xs: '4px', md: '5px' }}
                width={{ xs: 1, md: 'calc(100% - 150px)' }}
                bgcolor='#F0F0F5'
                mt='5px'
                position='absolute'
                bottom={0}
                left='50%'
                sx={{ translate: '-50% 0' }}
            ></Box>

        </Stack>

    )
}


function TimeSlotPicker({
  availableSlots,
  details,
  handleBooking,
  selectedDate,
}) {
  const CustomChip = (props) => (
    <Chip
      label={props.label}
      color="primary"
      variant="outlined"
      sx={{
        borderRadius: "5px",
        fontSize: { xs: 10, md: 14 },
        cursor: "pointer",
        "&:nth-of-type(1)": {
          ml: 0,
        },
        mr: { xs: 1, md: 3 },
        mt: { xs: 1, md: 0 },
      }}
      onClick={props.handleClick}
    />
  );

  const handleClick = (slot) => {
    handleBooking({ ...details, bookingDate: selectedDate, bookingTime: slot });
  };

  return (
    <Stack
      pt={3}
      spacing={{ xs: 2, md: 3 }}
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {availableSlots.morning.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Morning
          </Typography>
          {availableSlots.morning.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Afternoon
          </Typography>
          {availableSlots.afternoon.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
      {availableSlots.afternoon.length > 0 && (
        <Stack
          direction="row"
          alignItems="center"
          px={{ xs: 0, md: 6 }}
          flexWrap={"wrap"}
        >
          <Typography
            width={{ xs: 1, md: "15%" }}
            fontSize={{ xs: 14, md: 16 }}
          >
            Evening
          </Typography>
          {availableSlots.evening.map((slot) => (
            <CustomChip
              key={slot}
              label={slot}
              handleClick={() => handleClick(slot)}
            />
          ))}
        </Stack>
      )}
    </Stack>
  );
}


function Calender({ availableSlots, details, handleBooking }) {
  const [selectedDate, setSelectedDate] = useState(startOfDay(new Date()));

  const totalSlots =
    availableSlots.morning.length +
    availableSlots.afternoon.length +
    availableSlots.evening.length;

  return (
    <Box>
      <DaySelector
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        totalSlots={totalSlots}
      />
      <TimeSlotPicker
        availableSlots={availableSlots}
        selectedDate={selectedDate}
        details={details}
        handleBooking={handleBooking}
      />
    </Box>
  );
}
export default Calender;