/* eslint-disable no-unused-vars */
import cors from 'cors';
import httpStatus from 'http-status';
import express, { Application, NextFunction, Request, Response } from 'express';

import routes from './app/routes';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import cookies from 'cookie-parser';
import multer from 'multer';
import { addDummyUser } from './app/modules/user/user.dummy';

const app: Application = express();


// Multer Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

export const uploadToMulter = multer({ storage });

app.use(cors());
app.use(cookies());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('uploads'));

app.use('/api/v1',uploadToMulter.single('file'), routes);

//global error handler
app.use(globalErrorHandler);



//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});

addDummyUser()
export default app;
