import express from 'express';
import { logFareManage, logBookingTicket } from '../controllers/fare-audit-controller';

const router = express.Router();

router.post('/log-fare-manage', logFareManage);
router.post('/log-booking-ticket', logBookingTicket);

export default router;