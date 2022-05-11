import styled from "styled-components"
import { css } from "styled-components"

export const Wrapper = styled.div.attrs(props => (
    {
        w: props.w || "100%", 
        h: props.h || "100%", 
        bg: props.bg || "#FFFFFF", 
        color: props.color || "#000000",
        margin: props.margin || "0",
        padding: props.padding || "0",
        border: props.border || "none"
    }))`
    box-sizing: border-box;
    width: ${props => props.w};
    height: ${props => props.h};
    display:flex;
    ${props => { 
        if(props.align) {
            switch(props.justify){
                case "left": return css`justify-content: flex-start` 
                case "center": return css`justify-content: center` 
                case "right": return css`justify-content: flex-end` 
                case "sb": return css`justify-content: space-between` 
                case "sa": return css`justify-content: space-around` 
                case "se": return css`justify-content: space-evenly` 
                default: return css`justify-content: center`; 
            } 
        }
    }};
    ${props => { 
        if(props.align) {
            switch(props.align) {
                case "top": return css`align-items: flex-start` 
                case "center": return css`align-items: center` 
                case "bottom": return css`align-items: flex-end` 
                default: return css`align-items: center`; 
            } 
        }
    }};
    ${props => { 
        if(props.c) return css`flex-direction:column`
        if(props.cr) return css`flex-direction:column-reverse`
        if(props.rr) return css`flex-direction:row-reverse`
    }};

    ${props => { 
        if(props.pointer) return css`cursor: pointer`
    }};

    background-color: ${props => props.bg};
    color: ${props => props.color};
    margin: ${props => props.margin};
    padding: ${props => props.padding};
    border: ${props => props.border};
`