import express from 'express';
import { search } from '../controllers/flight-booking/search-controller';
import { pricing } from '../controllers/flight-booking/pricing-controller';
import { booking } from '../controllers/flight-booking/booking-controller';

const router = express.Router();

router.post('/search', search);
router.post('/pricing', pricing); // Assuming pricing uses the same controller for now
router.post('/booking', booking);
// router.post('/log-booking-ticket', logBookingTicket);

export default router;