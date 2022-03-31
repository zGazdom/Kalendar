import { Appointment } from '../../database/schemas/index.js';

export async function getScheduleController(req, res) {
  try {
    Appointment.find((err, data) => {
      if (!err) {
        return res.send({ schedule: data });
      }

      return res.status(500).send({
        error: err,
      });
    });
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: err,
    });
  }
}

export async function addTimeslotController(req, res) {
  try {
    const { firstName, lastName, dateTime, service, description } = req.body;

    Appointment.create(
      {
        firstName,
        lastName,
        dateTime,
        service,
        description,
        createdAt: new Date(dateTime),
      },
      (err, timeslot) => {
        if (!err) {
          return res.send(timeslot);
        }

        if (err.code === 11000) {
          return res.send({
            error: {
              field: Object.keys(err.keyValue)[0],
              message: 'Appointment already reserved.',
            },
          });
        }

        return res.status(500).send({
          error: err,
        });
      },
    );
  } catch (err) {
    console.log(err);
    res.status(400).send({
      error: err,
    });
  }
}
