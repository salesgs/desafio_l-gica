import {calculateRanked} from "./modules/calculateRanked.mjs";
import {category} from "./modules/category.mjs";
const rank = calculateRanked(80,25);
category(rank);