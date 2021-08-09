import React, { Component } from 'react'
class Design extends Component {
    render() {
        return (
            <div className="designMain">
                <div className="header">
                    <form>
                        <p>This is my first note and this class is very interesting to learn about.</p>
                        <textarea rows="1" method="POST">
                        </textarea>
                        <button type="submit">Save</button>
                        <p> The solar system is very large. This is my second note.</p>

                    </form>
                    <form>
                        <textarea >
                        </textarea>
                        <button type="submit">Save</button>
                    
                    <p>Your notes are displayed above!</p>
                        </form>
                </div>
            </div>
        )
    }
}
export default Design
