import currency from './currency';
import percent from './percent';
import * as units from './units';
import * as plc from './plcConversions';

export default{
    install(Vue) {
        Vue.filter('currency', currency);
        Vue.filter('percent', percent);
        Vue.filter('frequency', units.frequency);
        Vue.filter('speed', units.speed);
        Vue.filter('current', units.current);
        Vue.filter('vfdStatus', plc.vfdStatus);
    }
}