import React, { useContext, useState } from "react"
import { whiteModeColor, darkModeColor } from "../../them-color"
import ThemeContext from "../lib/context/ThemContext"
import tw, { css } from "twin.macro"
import { isMobile } from 'react-device-detect';
import Button from "./Button"
const TableOfContents = ({ toc, currentHeaderUrl }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const [showToc, setShowToc] = useState(false)
  const showModal = () => {
    setShowToc(!showToc)
    console.log(showToc)
  }
  return (
    toc ? (
      <>
        {!isMobile ?
          <div
            css={css`
          ::-webkit-scrollbar {
            width: 4px;
          }
          ::-webkit-scrollbar-track {
            background-color: transparent;
          }
          ::-webkit-scrollbar-thumb {
            border-radius: 9999px;
            background-color: gray;
          }
          ::-webkit-scrollbar-button {
            width: 0;
            height: 0;
          }
          /* Firefox scrollbar */
          scrollbar-width: thin;
          scrollbar-color: gray transparent;
          display: none;
          @media screen and (min-width: 1280px) {
            float: right;
            position: sticky;
            top: 100px;
            width: calc((100vw - 720px) / 2 - 80px);
            max-width: 250px;
            margin-right: 1rem;
            overflow: auto;
            word-break: break-word;
            max-height: calc(100vh - 200px);
            fontsize: 1rem;
            display: flex;
            border-left-width: 4px;
            border-image: linear-gradient(
              180deg,
              ${isDarkMode
                ? darkModeColor.mainColor1 +
                "," +
                darkModeColor.mainColor2 +
                "," +
                darkModeColor.mainColor3
                : whiteModeColor.mainColor1 +
                "," +
                whiteModeColor.mainColor2 +
                "," +
                whiteModeColor.mainColor3}
            );
            border-image-slice: 1;
          }
        `}
          >
            <div css={tw`mx-4`}>
              <h3
                css={css`
              ${tw`font-bold mb-2 text-lg mb-2`}
              ${isDarkMode ? tw`text-gray-400` : tw`text-gray-700`};
            `}
              >
                目录
              </h3>
              <div
                css={css`
              ul {
                margin-left: 0.5rem;
              }
              ul > li a:hover {
                color: ${isDarkMode ? "#DDDDDD" : "#555555"};
              }
              ul > li a {
                transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
                ${tw`text-gray-500 text-sm`}
              }
              ul > li a[href="${currentHeaderUrl}"] {
                font-size: 0.95rem;
                color: ${isDarkMode ? "#DDDDDD" : "#555555"};
              }
            `}
                dangerouslySetInnerHTML={{ __html: toc }}
              ></div>
            </div>
          </div> :
          <div
            css={css`
                position: fixed;
                top: 80px;
                right: 2px;
                z-index: 9999;
                max-width: 250px;
                overflow: auto;
                word-break: break-word;
                max-height: calc(100vh - 200px);
                box-shadow: 0 1px 3px rgb(60 60 60 / 10%);
             }`
            }
          >
            {!showToc ?
              <div css={css`padding:5px;`} onClick={showModal}>目录</div> :
              <div css={css`background:#fff;`}>
                <div css={tw`mx-4`}>
                  <h3
                    onClick={showModal}
                    css={css`
                    text-align: center;
                     ${tw`mb-2 text-lg mb-2`}
                     ${isDarkMode ? tw`text-gray-400` : tw`text-gray-700`};
                   `}
                  >
                    目录
                  </h3>
                  <div
                    css={css`
                          ul {
                            margin-left: 0.5rem;
                          }
                          ul > li a:hover {
                            color: ${isDarkMode ? "#DDDDDD" : "#555555"};
                          }
                          ul > li a {
                            transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
                            ${tw`text-gray-500 text-sm`}
                          }
                          ul > li a[href="${currentHeaderUrl}"] {
                            font-size: 0.95rem;
                            color: ${isDarkMode ? "#DDDDDD" : "#555555"};
                          }
                    `}
                    dangerouslySetInnerHTML={{ __html: toc }}
                  ></div>
                </div>
              </div>
            }
          </div>
        }
      </>
    ) : null
  )
}

export default TableOfContents
