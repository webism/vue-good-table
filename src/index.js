import GoodTable from './components/Table.vue';
import Spinner from 'vue-simple-spinner';

const GoodTablePlugin = {
  install: function(Vue, options) {
    Vue.component(GoodTable.name, GoodTable);
    Vue.component(Spinner.name, Spinner);
  },
};

export default GoodTablePlugin;
export {
   GoodTable as VueGoodTable
};

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(GoodTablePlugin);
}
