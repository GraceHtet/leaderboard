import './style.css';
import Fun from './module/fun.js';
import { formAction, refreshAction } from './module/domAction.js';

const scoreFuns = new Fun();

formAction();
refreshAction();
scoreFuns.show();
