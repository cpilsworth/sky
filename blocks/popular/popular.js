import { getMetadata, readBlockConfig} from '../../scripts/aem.js';
import ffetch from '../../scripts/ffetch.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  // load footer as fragment
  const { type } = readBlockConfig(block);
  const entries = await ffetch('/popular.json').sheet(type).all();
  console.log(entries);
}
