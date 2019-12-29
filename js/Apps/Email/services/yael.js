componentDidMount() {
    this.eventKiller = eventBusService.on('toggleModal', (details) => {
        console.log(details)
        this.setState(prevState => ({ display: !prevState.display, txt:details }))
        setTimeout(this.hideModal,3000)
    })
}