import './style.css';
import idGenerator from './module/idGenerator.js';
import Fun from './module/fun.js';
import { formAction, refreshAction } from './module/domAction.js';

idGenerator();
const scoreFuns = new Fun();

formAction();
refreshAction();
scoreFuns.show();
