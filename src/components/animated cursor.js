import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
    return (

      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color='78, 232, 200'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        innerStyle={{
            backgroundColor: 'var(--secondry-color)'
          }}
          outerStyle={{
            //borderRadius: 0,
            border: '1px solid var(--secondry-color)'
          }}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
    );
  }