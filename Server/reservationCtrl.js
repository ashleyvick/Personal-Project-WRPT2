module.exports = {
  makeReservation: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { date, time, adults, children } = req.body;
      const { user_id } = req.session.user;
      console.log(user_id);
      const newDate = new Date(date);
      await db.reservations.make_reservation({
        user_id,
        date: newDate.getTime(),
        time,
        adults,
        children,
      });
      res.status(200).json("Reservation has been saved");
    } catch (e) {
      console.log(e);
      res.status(500).json("Request did not go through");
    }
  },
  cancelReservation: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { date, time, aduts, children } = req.body;
      const { user_id } = req.session.user;
      console.log(user_id);
      await db.reservations.cancel_reservation({
        user_id,
      });
      res.status(200).json("Your reservation has been canceled.");
    } catch (e) {
      console.log(e);
      res.status(500).json("Request did not go through. Please try again.");
    }
  },
  getReservations: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { user_id } = req.session.user;
      console.log(user_id);
      const reservations = await db.reservations.get_reservations_by_user_id({
        user_id,
      });
      res.status(200).json(reservations);
    } catch (e) {
      console.log(e);
      res.setStatus(500);
    }
  },
};
