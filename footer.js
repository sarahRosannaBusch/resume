"use strict"

/** @brief  flower for footer
 *  @author Sarah Rosanna Busch
 *  @date   ? (I wrote this ages ago...)
 */

var footer = (function() {
    var that = {};
    var clickCount = 0;

    that.setup = function() {
        if ( window.location !== window.parent.location ) {
            // The page is in an iframe
            document.getElementsByClassName('pageFoot')[0].style.display = 'none';
            document.getElementsByClassName('smAvatar')[0].style.display = 'none';
        } else {
            // The page is not in an iframe
            document.getElementById("signature").innerHTML =
                "<svg id='flower' height='80px' onclick='footer.easterEgg()'>" +
                    '<g id="green"' +
                    '   inkscape:label="Layer 4">' +
                    '  <path' +
                    '     style="fill:#008000;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"' +
                    '     d="m 17.82375,36.002799 c -0.769797,1.658023 -2.487036,4.204274 0,12.612822 2.487035,8.408548 2.42782,7.342676 1.598808,10.717938 -0.829011,3.375263 -2.42782,5.743868 -4.85564,7.816397 -0.592152,0.473721 -0.888227,0.888227 -0.236861,0.651367 0.651367,-0.236861 4.914856,-1.835669 6.454449,-8.171688 1.539594,-6.336019 -1.954099,-11.014014 -2.783111,-16.224945 -0.829012,-5.210932 2.487036,-7.934828 2.013315,-8.526979 -0.829012,0.473721 -2.19096,1.125088 -2.19096,1.125088 z"' +
                    '     id="path3348"' +
                    '     inkscape:connector-curvature="0" />' +
                    '  <path' +
                    '     style="fill:#008000;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1"' +
                    '     d="M 27.802618,12.8965 C 29.477475,11.7241 34.33456,8.5418722 40.280301,8.3743865 46.226043,8.2069008 54.68407,12.8965 58.703726,14.571357 c 4.019656,1.674856 10.467855,3.098485 15.743654,1.172399 5.275798,-1.926085 11.472769,-6.1132269 19.093367,-6.8669125 7.620603,-0.7536855 8.541773,1.5911135 8.541773,1.5911135 0,0 -8.960487,-1.2561421 -15.324943,1.256143 -6.364456,2.512285 -9.546684,5.861999 -16.999796,6.280713 -7.453113,0.418714 -16.246111,-3.852171 -19.093368,-5.443285 -2.847256,-1.591114 -7.871826,-3.6846845 -13.650082,-2.428542 -5.778256,1.256143 -9.044227,4.187142 -9.044227,4.187142 z"' +
                    '     id="path3350"' +
                    '     inkscape:connector-curvature="0" />' +
                    '</g>' +
                    '<g id="purple"' +
                    '   inkscape:label="Layer 3">' +
                    '  <path' +
                    '     style="fill:#8A2BE2;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1;fill-opacity:1"' +
                    '     d="M 10.384108,40.02918 C 9.7979083,37.181923 10.467851,29.310096 13.39885,25.960383 10.970308,24.787983 8.4580229,22.861898 7.5368517,21.438269 6.6156805,20.014641 4.0196525,18.50727 2.5122814,18.339784 5.1083094,16.581185 10.049137,14.236385 16.916049,16.16247 c -0.08374,-2.009828 0.753686,-5.861998 2.261057,-7.3693693 1.507371,-1.5073711 3.014742,-5.2757989 3.182228,-6.3644558 1.256143,1.0886569 6.448199,7.0343985 5.443284,13.9850541 2.428543,-0.921171 5.359542,-1.256143 7.536856,0.418714 2.177314,1.674857 6.699427,1.256143 7.201884,1.1724 -0.502457,1.339885 -4.605856,7.620598 -10.802826,8.039312 0.921171,1.7586 1.591114,5.778256 1.088657,7.704342 -0.502457,1.926085 0.502457,5.192056 1.004914,6.19697 -1.507371,-0.251229 -9.211712,-2.428543 -11.556512,-8.039313 -1.674857,2.093571 -4.43837,4.187142 -6.78317,4.857085 -2.344799,0.669943 -4.019656,1.674857 -5.108313,3.265971 z"' +
                    '     id="path3345"' +
                    '     inkscape:connector-curvature="0" />' +
                    '</g>' +
                    '<g id="orange"' +
                    '   inkscape:label="Layer 2">' +
                    '  <path' +
                    '     style="opacity:1;fill:#ffac00;fill-opacity:1;stroke:none;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"' +
                    '     d="m 26.765235,23.093901 a 4.50035,4.50035 0 0 1 -4.50035,4.50035 4.50035,4.50035 0 0 1 -4.50035,-4.50035 4.50035,4.50035 0 0 1 4.50035,-4.50035 4.50035,4.50035 0 0 1 4.50035,4.50035 z"' +
                    '     id="path3341"' +
                    '     inkscape:connector-curvature="0" />' +
                    '</g>' +
                    '<g id="ink"' +
                    '   transform="translate(-28.149985,-966.66644)"' +
                    '   sodipodi:insensitive="true">' +
                    '  <path' +
                    '     style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"' +
                    '     d="m 80.058594,979.96273 c -0.440898,-0.2435 -2.442244,1.8865 -2.442244,1.8865 0,0 0.04523,-2.9475 -0.336491,-3.1176 -4.362977,-1.944 -7.746155,-2.3091 -10.951734,-1.8646 -0.815183,0.1131 -1.59986,0.2798 -2.355733,0.4894 -0.74878,0.2076 -0.887066,2.7846 -0.887066,2.7846 0,0 -2.033428,-1.7272 -2.400212,-1.555 -1.41951,0.6664 -2.721944,1.4489 -3.923395,2.2439 -0.445971,0.3095 -0.547665,0.022 -0.959647,-0.2812 -0.133449,-0.2016 -0.202188,-0.4499 -0.166015,-0.7031 2.437938,-2.7195 7.624677,-4.526 10.418631,-4.9493 0.504608,-0.07 1.555896,-2.5311 1.555896,-2.5311 0,0 1.032769,2.3394 1.569575,2.3511 3.496409,0.076 7.440993,1.0738 11.841325,3.5043 1.585239,0.8756 3.117315,1.6336 4.606242,2.2724 0.476373,0.2044 2.048995,-1.7038 2.048995,-1.7038 0,0 0.201981,2.5926 0.614687,2.734 5.048866,1.7296 9.642163,1.9796 14.211362,0.6721 0.37292,-0.1067 0.0298,-2.5973 0.0298,-2.5973 0,0 1.9233,1.9475 2.34104,1.7787 1.44467,-0.5839 2.89439,-1.3246 4.36275,-2.2245 3.23962,-1.9855 7.18797,-3.1351 10.98033,-3.6956 0.52057,-0.077 1.3283,-2.5525 1.3283,-2.5525 0,0 1.18675,2.2589 1.66012,2.2247 3.36834,0.01 5.94768,0.4815 7.61158,1.9374 0,0 -0.65978,0.2599 -0.77273,0.3145 -1.9566,-0.2558 -5.87356,-0.2971 -6.69623,-0.2693 -3.6377,0.123 -7.67411,1.0988 -11.05123,2.6592 -0.3538,0.1635 0.28278,2.9883 0.28278,2.9883 0,0 -1.98552,-2.1082 -2.30383,-1.9131 -4.79046,2.9358 -9.55606,4.2671 -14.601079,4.047 -0.446619,-0.019 -1.226799,2.6379 -1.226799,2.6379 0,0 -1.048434,-2.831 -1.516777,-2.8996 -4.151134,-0.6087 -8.369211,-2.1812 -12.872181,-4.6684 z m 29.955076,0.4597 c 3.79508,-2.3258 8.84992,-3.487 13.29883,-3.8086 2.22428,-0.1605 4.29536,-0.112 5.97461,0.092 -1.49121,-0.836 -3.59628,-1.2451 -6.04691,-1.0763 -4.56423,0.3298 -9.7405,1.4967 -13.74218,3.9492 -9.18101,5.6266 -17.604774,5.3118 -28.510768,-0.7119 -5.687299,-3.1414 -10.752735,-3.9397 -14.862284,-3.3697 -4.110246,0.5701 -7.039752,2.2871 -9.766287,4.0913 l 0.154297,0.9063 c 2.497443,-1.6917 6.898442,-3.6932 9.744807,-4.1231 3.898044,-0.5406 8.50917,0.098 14.042969,3.1543 5.540963,3.0605 10.615873,4.515 15.476565,4.6964 4.860691,0.1813 9.514241,-0.9059 14.236351,-3.7999 z"' +
                    '     id="path3340"' +
                    '     inkscape:connector-curvature="0"' +
                    '     sodipodi:nodetypes="scscscscccccscscsscscsccccsscsccscssccccscccccss" />' +
                    '  <path' +
                    '     style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0.5;stroke-linecap:round;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"' +
                    '     d="m 41.737817,1035.0007 c -0.105329,-0.3719 0.0094,-0.8189 0.380859,-1.082 0,0 1.014577,-0.7243 2.172681,-2.0901 0.205501,-0.2424 -1.005346,-2.3437 -1.005346,-2.3437 0,0 2.149578,0.8266 2.399039,0.4171 1.462952,-2.4015 2.589197,-5.815 1.511752,-10.0634 -0.09564,-0.3771 -2.690476,-0.386 -2.690476,-0.386 0,0 2.143762,-1.4553 2.021973,-1.8127 -0.702606,-2.062 -1.542738,-4.1434 -1.895951,-6.4556 -0.170334,-1.1151 -0.322695,-2.1747 -0.314947,-3.2623 0.0023,-0.3191 -2.245773,-1.6338 -2.245773,-1.6338 0,0 2.387913,-0.029 2.46658,-0.3863 0.306333,-1.3934 0.972875,-2.9012 2.251471,-4.6712 0.182127,-0.2518 0.438832,-0.3922 0.693359,-0.4179 0.254527,-0.026 0.501371,0.054 0.697266,0.1952 0.195894,0.1417 0.347019,0.3499 0.402343,0.5996 0.05532,0.2497 0.0024,0.5372 -0.179687,0.7889 -2.735676,3.7869 -2.220581,5.7607 -1.803815,8.489 0.04915,0.3217 2.332483,0.5186 2.332483,0.5186 0,0 -1.96871,1.1865 -1.861434,1.5585 0.584954,2.0284 1.469303,4.0905 2.052389,6.3897 0.493851,1.9472 0.576572,3.7476 0.389057,5.3848 -0.04644,0.4054 1.888356,1.7048 1.888356,1.7048 0,0 -2.26134,0.3093 -2.377375,0.7047 -0.551191,1.667 -2.160924,6.3601 -7.284804,7.8541 z m 6.900485,-15.5274 c -0.765935,-3.0201 -2.312475,-5.6836 -2.744786,-8.5137 -0.431479,-2.8246 -0.689836,-4.9895 2.103288,-8.856 0.108872,-0.1505 0.123151,-0.2735 0.09766,-0.3885 -0.02549,-0.1151 -0.103121,-0.2262 -0.208984,-0.3028 -0.105864,-0.077 -0.234271,-0.1153 -0.351563,-0.1035 -0.117291,0.012 -0.229018,0.064 -0.33789,0.2149 -2.911572,4.0303 -2.530181,6.5574 -2.067487,9.5863 0.463437,3.0338 1.978476,5.7232 2.709957,8.6074 2.320483,9.1498 -5.426754,14.6075 -5.426754,14.6075 l -0.002,0 0,0 c 6.031,-2.8927 7.046675,-10.1844 6.228559,-14.8536 z"' +
                    '     id="path3338"' +
                    '     inkscape:connector-curvature="0"' +
                    '     sodipodi:nodetypes="ccscsscssscscccccscsssccccscscccsscccc" />' +
                    '  <path' +
                    '     style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.97399998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"' +
                    '     d="m 49.543052,968.48694 c -0.03407,2.1523 -0.712647,4.3241 -2.145277,5.7587 -2.545704,2.5481 -3.542362,4.8259 -3.106032,7.9932 -4.846437,-1.4681 -10.590841,-0.5452 -14.605161,2.4854 l -1.536605,1.2017 1.945372,0.1256 c 1.967792,0.063 3.890009,0.75 4.833574,2.2381 1.604655,2.53 3.416837,4.0437 5.669002,4.7201 -4.932057,6.16524 -2.855234,14.33686 -2.855234,14.33686 l 0.361025,1.317 0.91004,-1.0175 c 1.263009,-1.4392 2.723734,-3.0291 4.564875,-3.5347 2.798598,-0.7669 5.424893,-1.9823 6.716289,-4.13774 2.970633,4.27474 7.014763,5.98424 11.881678,7.36414 l 1.715619,0.3837 -0.915978,-1.4979 c -1.139788,-1.8386 -1.970301,-3.7774 -1.52529,-5.7277 0.645719,-2.83156 0.568911,-5.02226 -0.704156,-7.28886 4.515291,-1.0809 8.859447,-4.053 10.72417,-8.3218 l 0.528103,-1.2593 -1.345637,0.2398 c -2.386546,0.4421 -5.149091,-0.1486 -6.965572,-1.2752 -2.594848,-1.6071 -4.681421,-1.5222 -7.258075,-0.6613 0.390336,-5.2032 -2.139842,-10.1741 -5.600847,-13.9377 l -1.241167,-1.3251 z m 1.190498,2.1511 c 3.159477,2.5701 6.171375,9.7252 4.043369,13.8464 3.888502,-1.7506 5.195028,-2.519 7.57213,-0.6226 1.976356,1.5751 5.041545,1.6001 7.120036,1.4104 -1.403423,3.2713 -6.964217,7.8034 -11.031954,6.7883 2.135936,1.4734 2.372981,5.7304 1.623433,7.90772 -0.678076,1.96914 -0.392724,3.91784 0.531101,5.60794 -4.541731,-1.1883 -8.094794,-3.4847 -10.117078,-9.58636 -0.843175,3.45738 -4.426687,6.07276 -7.173418,6.66336 -1.738787,0.374 -3.352709,0.9422 -4.248613,2.5689 -0.341891,-4.7972 -0.202119,-8.45096 4.048708,-13.01156 -3.047985,-0.5702 -5.726706,-2.4727 -6.811755,-4.5202 -0.841088,-1.5884 -2.520107,-2.3157 -3.923553,-2.7101 3.710402,-2.5315 10.964355,-3.652 13.835687,-0.5343 -1.154566,-3.2221 0.02155,-7.0368 2.144959,-9.0547 1.327751,-1.2609 2.028278,-3.1089 2.386948,-4.7532 z"' +
                    '     id="path3336"' +
                    '     inkscape:connector-curvature="0"' +
                    '     sodipodi:nodetypes="csccccsccccsccccsccccsccccccsccsccsccsccsc" />' +
                    '  <path' +
                    '     style="color:#000000;font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:sans-serif;text-indent:0;text-align:start;text-decoration:none;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000000;letter-spacing:normal;word-spacing:normal;text-transform:none;direction:ltr;block-progression:tb;writing-mode:lr-tb;baseline-shift:baseline;text-anchor:start;white-space:normal;clip-rule:nonzero;display:inline;overflow:visible;visibility:visible;opacity:1;isolation:auto;mix-blend-mode:normal;color-interpolation:sRGB;color-interpolation-filters:linearRGB;solid-color:#000000;solid-opacity:1;fill:#1a1a1a;fill-opacity:1;fill-rule:nonzero;stroke:none;stroke-width:0.97399998;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1;color-rendering:auto;image-rendering:auto;shape-rendering:auto;text-rendering:auto;enable-background:accumulate"' +
                    '     d="m 50.012225,984.07614 c -0.12086,0.01 -0.60615,-2.9533 -0.724903,-2.9366 0.137318,1.9907 -0.354457,4.8143 -2.517152,4.2205 -0.366912,2.1081 -2.267258,0.8424 -3.573325,0.4274 -0.06861,0.1137 2.059763,1.38 1.99912,1.4978 -0.05676,0.111 -6.375649,-1.8626 -6.425213,-1.7474 -0.05662,0.128 6.157233,2.3547 6.110439,2.4902 -0.09466,0.2776 -2.413903,-0.2208 -2.465465,0.066 1.754245,0.7253 3.36954,1.8077 2.606373,3.4617 1.296379,1.1613 0.421761,2.1543 -0.554649,3.4518 0.117789,0.1529 1.808697,-1.0656 1.939566,-0.9422 0.107304,0.1038 -3.958567,5.0015 -3.843838,5.09434 0.10836,0.095 4.396987,-4.63204 4.51151,-4.55224 0.142438,0.1028 -0.807004,2.0729 -0.655738,2.1601 1.327376,-1.6081 2.63344,-2.4739 4.001285,-1.2038 1.956652,-1.5802 2.9447,-0.2181 4.092439,1.4664 0.116532,-0.065 -0.70945,-2.3364 -0.59834,-2.4136 0.09471,-0.062 2.95503,4.61654 3.045729,4.54534 0.105782,-0.079 -2.558616,-4.92074 -2.458718,-5.01104 0.09237,-0.073 2.270545,1.763 2.357402,1.6744 -1.343898,-1.6231 -1.786006,-3.5231 -0.245439,-4.3878 -0.548778,-1.3024 0.881217,-1.6541 1.710458,-1.7794 0.01066,-0.1382 -2.124843,-0.3879 -2.124843,-0.5318 0,-0.1187 6.26183,-1.6498 6.254424,-1.7684 -0.01188,-0.1942 -6.299658,1.0237 -6.330878,0.8352 -0.02708,-0.1642 1.974986,-0.8479 1.9341,-1.007 -2.199636,0.2121 -3.969389,-0.5908 -3.901689,-2.1096 -2.272862,-0.032 -2.239545,-1.6446 -2.13105,-3.7227 -0.142066,-0.014 -0.912304,2.7294 -1.05737,2.7182 -0.154299,-0.01 0.259036,-6.1289 0.0985,-6.1314 -0.160518,0 -0.891494,6.1155 -1.0527,6.1287 z m 0.488598,1.8441 c 2.910092,-0.1612 4.18582,1.7739 4.061559,3.9539 -0.161207,2.8281 -1.796296,3.952 -4.061559,3.952 -2.265264,0 -4.022746,-1.5585 -4.061541,-3.952 -0.0425,-2.6221 1.799745,-3.8286 4.061541,-3.9539 z"' +
                    '     id="path4146"' +
                    '     inkscape:connector-curvature="0"' +
                    '     sodipodi:nodetypes="scccssscccssscccssscccssscccscsssssss" />' +
                    '</g>' +
                "</svg>";
            clickCount = 3;
            footer.easterEgg();
        }
    }

    that.easterEgg = function() {
        if(clickCount === 0) {
            document.getElementById('purple').style.visibility = 'visible';
            clickCount++;
        } else if(clickCount === 1) {
            document.getElementById('orange').style.visibility = 'visible';
            clickCount++;
        } else if(clickCount === 2) {
            document.getElementById('green').style.visibility = 'visible';
            clickCount++;
        } else {
            clickCount = 0;
            document.getElementById('orange').style.visibility = 'hidden';
            document.getElementById('purple').style.visibility = 'hidden';
            document.getElementById('green').style.visibility = 'hidden';
        }
    }

    return that;
}());