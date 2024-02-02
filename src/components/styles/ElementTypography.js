import styled from "styled-components"

export const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
`
export const H2 = styled.h2`
    color: ${props => props.theme.colors.red};
    margin: ${props => props.margin ? props.theme.spacings.small : 0};
`;

export const P = styled.p`
    margin: ${props => {
        switch (props.margin) {
            case "xxSmall":
                return props.theme.spacings.xxSmall;
            case "xSmall":
                return props.theme.spacings.xSmall;
            default:
                return 0;
        }
    }
    };
    font-size:${props => {
        switch (props.fontSize) {
            case "large":
                return props.theme.sizes.large;
            case "medium":
                return props.theme.sizes.medium;
            case "xSmall":
                return props.theme.sizes.xSmall;
            default:
                return props.theme.sizes.small;
        }
    }
    };
    line-height: ${props => {
        switch (props.lineHeight) {
            case "small":
                return props.theme.heights.small;
            case "medium":
                return props.theme.heights.medium;
            case "large":
                return props.theme.heights.large;
            default:
                return props.theme.heights.medium;
        }
    }
    };
    font-weight: ${props => {
        switch (props.fontWeight) {
            case "normal":
                return props.theme.weights.normal;
            case "bold":
                return props.theme.weights.bold;
            default:
                return props.theme.weights.normal;
        }
    }
    };
    color: ${props => {
        switch (props.color) {
            case "black":
                return props.theme.colors.black;
            case "orange":
                return props.theme.colors.orange;
            case "blue":
                return props.theme.colors.blue;
            case "greyDark":
                return props.theme.colors.greyDark;
            default:
                return props.theme.colors.greyLight2;
        }
    }
    };
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;

/* Used this the style the footer  */
export const Span = styled.span`
    margin: ${props => {
        switch (props.margin) {
            case "xxSmall":
                return props.theme.spacings.xxSmall;
            case "xSmall":
                return props.theme.spacings.xSmall;
            case "xxxSmall":
                return props.theme.spacings.xxxSmall;
            default:
                return 0;
        }
    }
    };
    font-weight: ${props => {
        switch (props.fontWeight) {
            case "normal":
                return props.theme.weights.normal;
            case "bold":
                return props.theme.weights.bold;
            default:
                return props.theme.weights.bold;
        }
    }
    };
    color: ${props => {
        switch (props.color) {
            case "black":
                return props.theme.colors.black;
            case "orange":
                return props.theme.colors.orange;
            default:
                return props.theme.colors.greyLight2;
        }
    }
    };
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;

/* styling the contact form */
export const Input = styled.input`
  height: ${props => props.theme.heights.large};
  border: 1px solid ${props => props.theme.colors.greyLight1};
  padding: ${props => props.theme.spacings.xSmall};
  margin:${props => props.theme.spacings.xxSmall};
  background-color: #fff;
`;

export const Form = styled.form` 
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${props => props.theme.spacings.xSmall};
`;