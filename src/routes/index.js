import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => res.render('index.ejs', { title: 'Awesome Website with nodejs'}));

router.get('/about', (req, res) => res.render('about.ejs', { title: 'About me'}));

router.get('/contact', (req, res) => res.render('contact.ejs', { title: ' Contact page'}));

export default router;