import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();

        this.state = {

            topText: "",
            bottomText: "",
            randImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []

        }

        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const { memes } = response.data
                this.setState({ allMemeImgs: memes })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({

            [name]: value,


        })
    }

    handleClick(event) {
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const newRandImg = this.state.allMemeImgs[randNum].url

        this.setState({
            randImg: newRandImg
        })
        event.preventDefault()
    }

    render() {

        return (
            <div>
                <form className="meme-form" onSubmit={this.handleClick}>
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />

                    <input
                        name="bottomText"
                        type="text"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>
                <div className="meme">
                    <img src={this.state.randImg} />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }

}

export default MemeGenerator