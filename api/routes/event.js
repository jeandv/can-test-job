const Event = require('../models/Events');

const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require('./verifyToken');

const router = require('express').Router();

//CREATE EVENT
router.post('/', verifyTokenAndAdmin, async (req, res) => {

  const newEvent = new Event(req.body);

  try {

    const savedEvent = await newEvent.save();
    res.status(200).json(savedEvent);

  } catch (err) {
    res.status(500).json(err);
  }

});

//UPDATE EVENT INFO
router.put('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    res.status(200).json(updatedEvent);

  } catch (err) {
    res.status(500).json(err);
  }

});

//DELETE EVENT
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {

  try {

    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json('Event has been deleted...');

  } catch (err) {
    res.status(500).json(err);
  }

});

//GET EVENT INFO
router.get('/find/:id', async (req, res) => {

  try {

    const EventInfo = await Event.findById(req.params.id);
    res.status(200).json(EventInfo);

  } catch (err) {
    res.status(500).json(err);
  }

});

//GET ALL EVENTS AND SHOW
router.get('/', async (req, res) => {

  const qNew = req.query.new;

  const qCategory = req.query.category;

  try {

    let Events;

    if (qNew) {

      Events = await Event.find().sort({ createdAt: -1 }).limit(1);

    } else if (qCategory) {

      Events = await Event.find({
        categories: {
          $in: [qCategory],
        },
      });

    } else {
      Events = await Event.find();
    }

    res.status(200).json(Events);

  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;