import 'es6-promise/auto';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import { expect } from 'chai';
import { mutations, getters } from './Store';

const { TOGGLE_UI } = mutations;

const state = {
    showUi: true
};

describe('Store', () => {

    describe('mutations', () => {

        it('TOGGLE_UI', () => {
            TOGGLE_UI(state);
            expect(state.showUi).to.equal(false);
        });

    });

    describe('getters', () => {

        it('get showUi', () => {
            const result = getters.showUi(state);
            expect(result).to.deep.equal(state.showUi);
        });

    });

});