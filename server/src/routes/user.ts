import express, { Request, Response } from 'express';
import { User } from '../models/user';

const router = express.Router();

// Route to create a new user
router.post('/', async (req: Request, res: Response) => {
    const { username, password, firstName, lastName } = req.body;

    const user = User.build({
        username,
        password,
        firstName,
        lastName
    });
    
    await user.save();
    return res.status(201).send(user);
});

// Route to retrieve all users
router.get('/', async (req: Request, res: Response) => {
    const users = await User.find({});
    return res.status(200).send(users);
});

export { router as userRouter };
