import http from 'http';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import MeetupAPI from 'meetup-api';

const meetup = MeetupAPI({
    key: process.env.MEETUP_API_KEY
});

/*
meetup.getStreamOpenEvents(parameters, function(err, resp) {
    console.log(err, resp);
});
*/
