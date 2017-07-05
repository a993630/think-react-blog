'use strict';

import Base from './base.js';
export default class extends Base {
  /**
   * index action
   * @return {Promise} []
   */
  async indexAction(){
    //auto render template file index_index.html
    let m = this.model('page');
      let insertId = await m.add({name: 'hello world'});
      console.log(insertId, '++++++++');
    return this.display();
  }
}