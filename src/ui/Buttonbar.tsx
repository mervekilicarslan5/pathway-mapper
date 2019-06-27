import React from "react";
import { Nav, Navbar, NavItem, FormControl, Glyphicon, InputGroup, ButtonGroup, ButtonToolbar, Button } from "react-bootstrap";
import PathwayActions from "../PathwayActions";
import { observable } from "mobx";
// @ts-ignore
import InlineSVG from 'svg-inline-react';
interface IButtonbarProps {
    pathwayActions: PathwayActions;
    handleOpen: (modelId: number) => void;
}

export default class BUttonbar extends React.Component<IButtonbarProps, {}>{


    @observable
    private searchedGene: string;

    constructor(props: IButtonbarProps) {
        super(props);
        this.searchedGene = "";
    }

    render() {

        const svgSrc = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="488.78px" height="488.78px" viewBox="0 0 488.78 488.78" style="enable-background:new 0 0 488.78 488.78;"xml:space="preserve"><g><g><path d="M141.408,119.872c12.293-13.112,29.653-20.77,47.624-20.77h247.405V47.828c0-12.569-10.468-22.652-23.036-22.652H75.397c-12.575,0-22.491,10.083-22.491,22.652v101.046h61.445L141.408,119.872z"/><path d="M483.019,149.253c-1.709-1.924-3.717-3.55-5.923-4.78c-3.352-1.861-7.151-2.92-11.071-2.92H189.032l0,0c-6,0-11.735,2.409-15.983,6.601c-0.214,0.208-0.423,0.438-0.626,0.651l-9.275,9.911l-23.622,25.207c-0.542,0.573-1.105,1.219-1.694,1.736c-4.113,3.572-9.41,5.667-14.915,5.667h-0.005H22.768l0,0c-5.684,0-11.111,2.022-15.271,5.791c-0.667,0.589-1.293,1.179-1.888,1.857c-0.417,0.479-0.803,0.948-1.183,1.459c-3.482,4.744-5.02,10.661-4.217,16.542l26.479,194.182c3.565,26.14,23.553,46.612,48.692,51.284c3.592,0.667,7.288,1.163,11.058,1.163h314.261c27.761,0,51.522-19.003,58.354-45.194c0.704-2.706,1.226-5.567,1.555-8.42l15.265-132.289l12.772-110.674c0.067-0.647,0.108-1.293,0.125-1.929C488.947,159.299,486.909,153.623,483.019,149.253z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';

        return (
            <Navbar style={{ backgroundColor: "#eff0f2" }}>
                <Nav style={{marginTop: "8px"}}>
                    <ButtonToolbar className="toolbar pathway-toolbar">
                        <ButtonGroup>
                            <Button onClick={this.props.pathwayActions.newPathway}>A</Button>
                            <Button>B</Button>
                            <Button>C</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>D</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>E</Button>
                            <Button>F</Button>
                            <Button>G</Button>
                            <Button>H</Button>
                            <Button>I</Button>
                            <Button>J</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>K</Button>
                            <Button>L</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>M</Button>
                            <Button>N</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button onClick={() => {this.props.handleOpen(0)}}>O</Button>
                            <Button>P</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button onClick={this.props.pathwayActions.performLayout}>Q</Button>
                            <Button>R</Button>
                        </ButtonGroup>

                        <ButtonGroup>
                            <Button>S</Button>
                            <Button>T</Button>
                        </ButtonGroup>
                    </ButtonToolbar>
                </Nav>
                <Nav pullRight style={{marginTop: "8px"}}>
                    <InputGroup >
                        <FormControl type="text"
                            onChange={(e: any) => { this.searchedGene = e.target.value; }}
                            onKeyPress={(e: any) => { if (e.key !== "Enter") return; this.props.pathwayActions.searchGene(this.searchedGene) }} />
                        <InputGroup.Addon>
                            <Glyphicon onClick={() => { this.props.pathwayActions.searchGene(this.searchedGene) }} glyph="search" />
                        </InputGroup.Addon>
                    </InputGroup>
                </Nav>
            </Navbar>
        )
    }

}