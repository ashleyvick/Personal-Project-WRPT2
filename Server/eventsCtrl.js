module.exports = {
  viewEvents: async (req, res) => {
    const db = req.app.get("db");
    const { event_name, event_date, event_startTime, event_endTime } = req.body;
    // const { events } = req.body;
    // const newDate = new Date(event_date);
    const events = await db.events.view_events();
    res.status(200).json(events);
  },
  addEvent: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { event_name, event_date, event_startTime, event_endTime } =
        req.body;
      const newDate = new Date(event_date);
      await db.events.add_event({
        event_name,
        event_date: newDate.getTime(),
        event_startTime,
        event_endTime,
      });
      res.status(200).json("Event has been added");
    } catch (e) {
      console.log(e);
      res.status(500).json("Request did not go through. Please try again.");
    }
  },
  updateEvent: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { event_name, event_date, event_startTime, event_endTime } =
        req.body;
      const newDate = new Date(event_date);
      await db.events.update_event({
        event_name,
        event_date: newDate.getTime(),
        event_startTime,
        event_endTime,
      });
      res.status(200).json("Event has been updated.");
    } catch (e) {
      console.log(e);
      res.status(500).json("Request did not go through. Please try again.");
    }
  },
  deleteEvent: async (req, res) => {
    try {
      const db = req.app.get("db");
      const { event_name, event_date, event_startTime, event_endTime } =
        req.body;
      await db.events.delete_event({ event_date });
      res.status(200).json("Event has been cancelled.");
    } catch (e) {
      console.log(e);
      res.status(500).json("Request did not go through. Please try again.");
    }
  },
};
