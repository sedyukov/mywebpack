import * as $ from 'jquery'

function createAnalytics() {
    let counter = 0
    let isDestroyed: boolean = false
    const listener = (): number => counter++
    $(document).on('click', listener)

    return {
        destroy() {
            $(document).off('click', listener)
            isDestroyed = true
        },
        getClicks() {
            if (isDestroyed) {
                return 'Analytics is destroyed now. Can not do this'
            }
            return counter
        }
    }
}

window['analytics'] = createAnalytics()