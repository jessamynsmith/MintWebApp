/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import { join } from 'path';
import { Router } from 'express';
import fs from '../utils/fs';
import handlebars from 'handlebars';

// A folder with Jade/Markdown/HTML content pages
const CONTENT_DIR = join(__dirname, './content');

// Extract handlebars metadata and generate HTML
const parseHbs = (path, hbsContent) => {
  var template = handlebars.compile(hbsContent);
  var htmlContent = template(hbsContent.body);
  return Object.assign({ path, content: htmlContent });
};

const router = new Router();

router.get('/', async (req, res, next) => {
  try {
    let path = req.query.path;

    if (!path || path === 'undefined') {
      res.status(400).send({error: `The 'path' query parameter cannot be empty.`});
      return;
    }

    let fileName = join(CONTENT_DIR, (path === '/' ? '/index' : path) + '.hbs');
    if (!await fs.exists(fileName)) {
      fileName = join(CONTENT_DIR, path + '/index.hbs');
    }

    if (!await fs.exists(fileName)) {
      res.status(404).send({error: `The page '${path}' is not found.`});
    } else {
      const source = await fs.readFile(fileName, { encoding: 'utf8' });
      const content = parseHbs(path, source);
      res.status(200).send(content);
    }
  } catch (err) {
    next(err);
  }
});

export default router;

