import { Vue, Component, Prop } from 'vue-property-decorator';
import {mapActions, mapGetters} from 'vuex';
import Render from './AppComponent.html';

@Render
@Component({
    computed: mapGetters(['showUi']),
    methods: mapActions(['toggleUi'])
})
export default class AppComponent extends Vue {

    @Prop() title!: string;

    created() {
        console.log("AppComponent is created");
    }

    mounted() {
        console.log("AppComponent is mounted");
    }

}