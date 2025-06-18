import express from 'express';
import { search } from '../controllers/flight-booking/search-controller';
import { pricing } from '../controllers/flight-booking/pricing-controller';
import { booking } from '../controllers/flight-booking/booking-controller';
import { ticketing } from '../controllers/flight-booking/issue-ticket-controller';

const router = express.Router();

router.post('/search', search);
router.post('/pricing', pricing); // Assuming pricing uses the same controller for now
router.post('/booking', booking);
router.post('/issue-ticket', ticketing); // Assuming issue-ticket is the same as booking for now
// router.post('/log-booking-ticket', logBookingTicket);

export default router;