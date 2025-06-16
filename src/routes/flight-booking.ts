import express from 'express';
import { search } from '../controllers/flight-booking/search-controller';

const router = express.Router();

router.post('/search', search);
// router.post('/log-booking-ticket', logBookingTicket);

export default router;