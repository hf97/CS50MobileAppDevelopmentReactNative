import const 


state = {
    movie: {}
}

static contextType = MyContext

componentDidMount(){
    const m = this.context;
    this.ListeningStateChangedEvent({movie: m})
}

