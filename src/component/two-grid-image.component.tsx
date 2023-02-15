import { useRef, useState } from "react"

export const TwoGirdImageComponet = () => {
    const [imageWidth] = useState(140)

    const input = useRef(0)
    const [angle, setAngle] = useState(input.current)

    const rotateImage = () => {
        setAngle(input.current)
    }

    return (
        <div className="App">
            <div className="inputTag">
                Enter the angle: <input type="text" name="angle" id="angle" onChange={(e: any) => { input.current = e.target.value }} />
                <button className="button" onClick={rotateImage}>Rotate</button>
            </div>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <img style={
                            {
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: `${imageWidth}px ${imageWidth}px`
                            }
                        } src="https://i.postimg.cc/FfpJBC0y/image-part-001.jpg" alt="Part1" />
                    </div>
                    <div className="column">
                        <img style={
                            {
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: `${0}px ${imageWidth}px`
                            }
                        } src="https://i.postimg.cc/QVwKwTKy/image-part-002.jpg" alt="Part2" />
                    </div>
                </div>
                <div className="row">
                    <div className="column">
                        <img style={
                            {
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: `${imageWidth}px ${0}px`
                            }
                        } src="https://i.postimg.cc/njw9HsRM/image-part-003.jpg" alt="Part3" />
                    </div>
                    <div className="column">
                        <img style={
                            {
                                transform: `rotate(${angle}deg)`,
                                transformOrigin: `${0}px ${0}px`
                            }
                        } src="https://i.postimg.cc/4nmhW5yc/image-part-004.jpg" alt="Part4" />
                    </div>
                </div>
            </div>
        </div>
    )
}