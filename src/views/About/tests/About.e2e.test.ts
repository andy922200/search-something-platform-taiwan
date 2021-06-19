import {
    Selector
} from 'testcafe'

fixture('About.vue').page('http://localhost:8080/#/about')

test('About Page contains "This is About Page"', async testController => {
    const selector = Selector('.about > h2')

    await testController.expect(selector.innerText).eql('Taiwan Motel Search')
})
