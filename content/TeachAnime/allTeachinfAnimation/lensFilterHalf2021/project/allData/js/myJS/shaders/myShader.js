MyTextureMaskShader = {

            uniforms: {
        
                "textureBottom": { type: "t", value: null },
                "textureMasked": { type: "t", value: null },
                "textureMask": { type: "t", value: null },
                "textureTop": { type: "t", value: null }
        
            },
        
            vertexShader: [
        
                "varying vec2 vUv;",
        
                "void main() {",
        
                    "vUv = uv;",
                    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",
        
                "}"
        
            ].join("\n"),
        
            fragmentShader: [
        
                "uniform float opacity;",
        
                "uniform sampler2D textureBottom;",//底圖
                "uniform sampler2D textureMasked;",//masked
                "uniform sampler2D textureMask;",//mask
                "uniform sampler2D textureTop;",//頂圖
        
                "varying vec2 vUv;",
        
                "void main() {",
        
                    "vec4 texelMasked = texture2D( textureMasked, vUv );",
                    "vec4 texelMask = texture2D( textureMask, vUv );",
                    "vec4 texelBottom = texture2D( textureBottom, vUv );",
                    "vec4 texelTop = texture2D( textureTop, vUv );",
                    "vec4 background = vec4(0.667, 0.667, 0.667, 1.0);",

                    //bottom
                    //"vec4 bottomAndBakground = texelBottom + background;",
                    "vec4 bottomAndBakground = mix(background , texelBottom , texelBottom.a);",
        
                    //bottom and (masked by mask)
                    "vec4 temp = mix( bottomAndBakground, texelMasked, texelMask.r );",
                    //add Top
                    "gl_FragColor = mix( temp, texelTop, texelTop.a );",
                    
        
                "}"
        
            ].join("\n")
};





//shader for eyeBall
MyEyeBallShader = {

            vertexShader: [

                "varying vec3 vNormal;",

                "void main() {",

                    "vNormal = normal;",

                    "gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

                "}"

        
            ].join("\n"),
        
            fragmentShader: [
                

                "uniform sampler2D texture;",

                "varying vec3 vNormal;",

                "void main() {",

                    "vec2 uv = normalize( vNormal ).xy * 0.5 + 0.5;",

                    "vec3 color = texture2D( texture, uv ).rgb;",

                    "if ( vNormal.z < - 0.85 ) color = vec3( 0.777, 0.74, 0.74 ); // back of eye",
                    
                    "gl_FragColor = vec4( color, 1.0 );",

                "}"
        
            ].join("\n")
};