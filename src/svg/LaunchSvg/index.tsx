import * as React from 'react';
import { useWindowDimensions } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

export const LaunchSvg = (props: any) => {
    // const { height, width } = useWindowDimensions();
    return (
        <Svg width={300} height={300} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <G clipPath="url(#a)">
                <Path
                    d="M415 307.456H-55v.235h470v-.235ZM25.445 316.405H-5.688v.235h31.133v-.235ZM156.5 316.527h-50.628v.235H156.5v-.235ZM62.462 321.255H44.424v.235h18.038v-.235ZM364.24 321.142h-18.076v.235h18.076v-.235ZM337.788 321.142h-28.472v.235h28.472v-.235ZM293.637 319.591H253.63v.235h40.007v-.235ZM167.78 265.532H-13.725a5.37 5.37 0 0 1-5.357-5.367V5.02A5.367 5.367 0 0 1-13.726-.3H167.78a5.365 5.365 0 0 1 5.367 5.367v255.098a5.366 5.366 0 0 1-5.367 5.367ZM-13.725-.112a5.132 5.132 0 0 0-5.123 5.132v255.145a5.13 5.13 0 0 0 5.123 5.132H167.78a5.14 5.14 0 0 0 5.132-5.132V5.02a5.14 5.14 0 0 0-5.132-5.132H-13.725ZM371.111 265.532H189.597a5.38 5.38 0 0 1-5.367-5.367V5.02a5.38 5.38 0 0 1 5.367-5.32h181.514a5.366 5.366 0 0 1 5.349 5.32v255.145a5.368 5.368 0 0 1-5.349 5.367ZM189.597-.112a5.142 5.142 0 0 0-5.132 5.132v255.145a5.14 5.14 0 0 0 5.132 5.132h181.514a5.144 5.144 0 0 0 5.133-5.132V5.02a5.144 5.144 0 0 0-5.133-5.132H189.597Z"
                    fill="#EBEBEB"
                />
                <Path d="M339.687 33.559H230.553v130.303h109.134V33.559Z" fill="#E6E6E6" />
                <Path d="M342.413 33.559H233.279v130.303h109.134V33.559Z" fill="#F5F5F5" />
                <Path d="M337.525 158.363V39.048h-99.348v119.315h99.348Z" fill="#fff" />
                <Path d="M337.516 158.363V39.048h-2.059v119.315h2.059Z" fill="#E6E6E6" />
                <Path d="M340.383 130.097H235.3v7.379h105.083v-7.379Z" fill="#F5F5F5" />
                <Path
                    d="M347.743 24.469h-122.52a.751.751 0 0 0 0 1.504h122.52a.753.753 0 0 0 .532-1.284.753.753 0 0 0-.532-.22Z"
                    fill="#E6E6E6"
                />
                <Path
                    d="M348.495 28.981a3.76 3.76 0 1 0 0-7.52 3.76 3.76 0 0 0 0 7.52ZM231.568 29.432a1.013 1.013 0 0 1-1.015-1.015v-2.18a1.026 1.026 0 0 1 1.015-1.016 1.014 1.014 0 0 1 1.016 1.015v2.18a1.013 1.013 0 0 1-1.016 1.016ZM336.388 29.432a1.015 1.015 0 0 1-1.015-1.015v-2.18a1.022 1.022 0 0 1 1.015-1.016 1.017 1.017 0 0 1 1.015 1.015v2.18a1.017 1.017 0 0 1-1.015 1.016Z"
                    fill="#E6E6E6"
                />
                <Path opacity={0.5} d="M347.499 25.22H235.3v54.728h112.199V25.22Z" fill="#E0E0E0" />
                <Path d="M243.676 28.981a3.76 3.76 0 1 0 0-7.52 3.76 3.76 0 0 0 0 7.52Z" fill="#E6E6E6" />
                <Path d="M29.327 177.858h-39.809l3.525-46.596h32.76l3.524 46.596Z" fill="#EBEBEB" />
                <Path d="M20.595 177.858h-6.843l-1.457-46.596h6.316l1.984 46.596Z" fill="#F5F5F5" />
                <Path d="M11.42 177.858H7.435v129.598h3.985V177.858Z" fill="#F0F0F0" />
                <Path
                    d="M10.932 196.949H7.924a2.651 2.651 0 0 0-2.651 2.651v9.786a2.65 2.65 0 0 0 2.65 2.65h3.009a2.65 2.65 0 0 0 2.65-2.65V199.6a2.651 2.651 0 0 0-2.65-2.651ZM10.932 221.126H7.924a2.651 2.651 0 0 0-2.651 2.651v9.786a2.65 2.65 0 0 0 2.65 2.65h3.009a2.65 2.65 0 0 0 2.65-2.65v-9.786a2.651 2.651 0 0 0-2.65-2.651ZM15.726 307.456H3.12a2.688 2.688 0 0 1 2.689-2.688h7.228a2.689 2.689 0 0 1 2.689 2.688Z"
                    fill="#F0F0F0"
                />
                <Path
                    d="M11.42 177.858H7.435v2.435h3.985v-2.435ZM35.531 28.878h-1.898v110.318h1.898V28.878Z"
                    fill="#E0E0E0"
                />
                <Path d="M328.069 180.594h-41.877v126.853h41.877V180.594Z" fill="#E6E6E6" />
                <Path d="M307.624 307.456h20.445v-17.512h-41.877l21.432 17.512Z" fill="#FAFAFA" />
                <Path d="M161.059 180.594h-41.877v126.853h41.877V180.594Z" fill="#E6E6E6" />
                <Path d="M328.059 180.594H143.218v120.827h184.841V180.594Z" fill="#FAFAFA" />
                <Path d="M163.663 307.456h-20.436v-17.512h41.877l-21.441 17.512Z" fill="#FAFAFA" />
                <Path
                    d="M312.211 225.62H159.085v30.239h153.126V225.62ZM312.211 262.327H159.085v30.239h153.126v-30.239Z"
                    fill="#F0F0F0"
                />
                <Path
                    d="M275.739 228.853h-80.191a5.85 5.85 0 0 1-4.135-1.712 5.85 5.85 0 0 1-1.712-4.135h91.885a5.845 5.845 0 0 1-3.608 5.405 5.831 5.831 0 0 1-2.239.442Z"
                    fill="#FAFAFA"
                />
                <Path d="M312.211 188.922H159.085v30.24h153.126v-30.24Z" fill="#F0F0F0" />
                <Path
                    d="M275.739 192.156h-80.191a5.858 5.858 0 0 1-5.847-5.857h91.885a5.842 5.842 0 0 1-1.709 4.141 5.855 5.855 0 0 1-4.138 1.716ZM275.739 265.56h-80.191a5.853 5.853 0 0 1-5.847-5.856h91.885a5.833 5.833 0 0 1-.443 2.24 5.839 5.839 0 0 1-5.404 3.616Z"
                    fill="#FAFAFA"
                />
                <Path
                    d="M16.017 152.441h140.286a16.584 16.584 0 0 1-16.338-15.435l-2.481-41.811H-2.792l2.472 41.811a16.579 16.579 0 0 0 16.337 15.435Z"
                    fill="#646FD4"
                />
                <Path
                    opacity={0.6}
                    d="M16.017 152.441h140.286a16.584 16.584 0 0 1-16.338-15.435l-2.481-41.811H-2.792l2.472 41.811a16.579 16.579 0 0 0 16.337 15.435Z"
                    fill="#fff"
                />
                <Path
                    d="M166.699 67.38H41.82a14.381 14.381 0 0 0-14.514 15.425l3.234 54.21a14.36 14.36 0 0 1-8.713 14.286 14.37 14.37 0 0 1-5.8 1.14h140.276a14.368 14.368 0 0 0 13.728-9.567c.665-1.877.933-3.872.785-5.859l.348 5.866-3.553-60.038a14.355 14.355 0 0 1 3.848-10.93 14.36 14.36 0 0 1 10.665-4.533h-15.425Z"
                    fill="#646FD4"
                />
                <Path
                    d="M182.124 67.38H41.82a16.563 16.563 0 0 1 16.337 15.425l12.08 203.689h140.275l-12.05-203.651a16.58 16.58 0 0 0-16.338-15.463Z"
                    fill="#646FD4"
                />
                <Path
                    opacity={0.8}
                    d="M209.982 285.994H70.707L58.657 82.776l-.001-.005A17.063 17.063 0 0 0 47.392 67.88H182.12a16.08 16.08 0 0 1 15.842 14.995v.002l12.019 203.117Z"
                    fill="#fff"
                    stroke="#000"
                />
                <Path
                    d="M105.42 125.359h-26L77.85 99.34h26.01l1.56 26.019Zm-23.18-3.064h19.9l-1.1-19.9H81.103l1.137 19.9ZM109.049 186.563H83.02l-1.541-26.029h26.028l1.542 26.029Zm-23.152-3.065h19.899l-1.175-19.899h-19.9l1.176 19.899ZM112.668 247.766H86.639l-1.579-26.029h26.029l1.579 26.029Zm-23.143-3.064h19.9l-1.185-19.9h-19.9l1.185 19.9ZM177.97 99.33h-59.841v3.065h59.841v-3.064ZM171.615 110.817h-52.809v3.065h52.809v-3.065ZM179.323 122.295h-59.84v3.064h59.84v-3.064ZM181.589 160.534h-59.841v3.065h59.841v-3.065ZM157.553 172.021h-35.128v3.064h35.128v-3.064ZM141.244 183.498h-18.133v3.065h18.133v-3.065ZM182.952 183.498h-29.921v3.065h29.921v-3.065ZM185.208 221.737h-59.841v3.065h59.841v-3.065ZM185.894 233.224h-59.841v3.065h59.841v-3.065ZM159.828 244.702H126.73v3.064h33.098v-3.064Z"
                    fill="#fff"
                />
                <Path
                    d="M94.112 119.23a2.538 2.538 0 0 1-1.748-.695L86 112.5a2.544 2.544 0 0 1-.796-1.782 2.55 2.55 0 0 1 4.302-1.922l4.531 4.277 10.199-10.838a2.55 2.55 0 0 1 3.713 3.497l-11.947 12.699a2.508 2.508 0 0 1-1.786.799h-.104ZM97.74 180.434a2.518 2.518 0 0 1-1.748-.696l-6.392-6.035a2.534 2.534 0 0 1-.838-1.789 2.55 2.55 0 0 1 1.516-2.431 2.55 2.55 0 0 1 2.819.517l4.54 4.277 10.19-10.838a2.545 2.545 0 0 1 3.605-.108 2.549 2.549 0 0 1 .108 3.604l-11.948 12.7a2.499 2.499 0 0 1-1.776.799h-.076ZM101.359 241.647a2.532 2.532 0 0 1-1.748-.705l-6.392-6.035a2.556 2.556 0 0 1-.838-1.789 2.546 2.546 0 0 1 2.5-2.649 2.548 2.548 0 0 1 1.835.734l4.54 4.277 10.199-10.838a2.548 2.548 0 0 1 3.685 3.478l-11.948 12.699a2.535 2.535 0 0 1-1.785.799l-.048.029ZM236.172 97.576l-18.257 4.488 54.482 221.643 18.257-4.487-54.482-221.644Z"
                    fill="#646FD4"
                />
                <Path
                    opacity={0.2}
                    d="m236.162 97.574-5.559 1.367 54.482 221.643 5.559-1.366-54.482-221.644Z"
                    fill="#000"
                />
                <Path
                    d="m289.274 322.517-14.148 3.478a2.114 2.114 0 0 0-1.549 2.558l2.369 9.64a2.115 2.115 0 0 0 2.559 1.549l14.149-3.478a2.116 2.116 0 0 0 1.549-2.559l-2.37-9.639a2.115 2.115 0 0 0-2.559-1.549Z"
                    fill="#646FD4"
                />
                <Path
                    opacity={0.7}
                    d="m289.274 322.517-14.148 3.478a2.114 2.114 0 0 0-1.549 2.558l2.369 9.64a2.115 2.115 0 0 0 2.559 1.549l14.149-3.478a2.116 2.116 0 0 0 1.549-2.559l-2.37-9.639a2.115 2.115 0 0 0-2.559-1.549Z"
                    fill="#fff"
                />
                <Path
                    d="m289.384 316.031-17.353 4.265a1.955 1.955 0 0 0-1.432 2.365l1.553 6.317a1.955 1.955 0 0 0 2.365 1.432l17.353-4.265a1.955 1.955 0 0 0 1.432-2.366l-1.553-6.317a1.954 1.954 0 0 0-2.365-1.431ZM236.174 97.554l-18.254 4.493 2.143-15.275 1.372-9.794 5.762 8.037 8.977 12.54Z"
                    fill="#E0E0E0"
                />
                <Path d="m227.197 85.014-7.134 1.758 1.372-9.794 5.762 8.037Z" fill="#646FD4" />
                <Path
                    d="M283.325 83.06c-.094 5.64-1.185 16.27 1.786 19.739a41.21 41.21 0 0 0-17.757 11.581c-4.07-6.655 1.241-10.236 1.241-10.236 5.856-1.88 5.499-6.29 4.268-10.34l10.462-10.745Z"
                    fill="#FFB573"
                />
                <Path
                    d="M265.625 108.637c1.551-5.763-2.82-6.58 4.465-9.4 5.696-2.256 16.459-2.576 18.988-.762 1.4 1.015-.527 4.569-.527 4.569l-22.926 5.593Z"
                    fill="#263238"
                />
                <Path
                    d="M297.199 107.396c.423.677.724 1.194 1.062 1.786.339.592.621 1.137.94 1.711a82.803 82.803 0 0 1 1.711 3.459c1.091 2.322 2.04 4.7 2.914 7.106a76.995 76.995 0 0 1 3.76 15.04l.245 1.937c.047.272.084.761.112 1.184.029.423 0 .808 0 1.184a35.07 35.07 0 0 1-.31 4.146c-.329 2.594-.827 5.048-1.372 7.52a121.539 121.539 0 0 1-4.202 14.222 2.751 2.751 0 0 1-3.178 1.769 2.758 2.758 0 0 1-2.161-2.925c.376-4.775.818-9.588 1.165-14.288.17-2.35.301-4.7.339-6.919 0-1.099 0-2.19-.104-3.102l-.084-.629-.122-.611-.348-1.636a85.585 85.585 0 0 0-4.042-12.916 126.985 126.985 0 0 0-2.717-6.251 68.194 68.194 0 0 0-1.494-3.045l-.79-1.485-.743-1.363-.131-.245a5.515 5.515 0 0 1 6.189-7.984 5.518 5.518 0 0 1 3.352 2.448l.009-.113Z"
                    fill="#FFB573"
                />
                <Path
                    d="m294.68 168.59.78-1.298 2.2-3.703 4.032 2.284c.837 3.76-1.72 7.088-1.72 7.088l-1.137.94a2.024 2.024 0 0 1-2.764-.104l-.874-.808a3.695 3.695 0 0 1-.517-4.399ZM241.1 166.672l-.649-2.35a2.19 2.19 0 0 0-2.65-1.541l-2.82.723-1.739.433a4.349 4.349 0 0 0-3.253 4.108v1.4a2.408 2.408 0 0 0 2.228 2.416l1.739.169a11.71 11.71 0 0 0 6.787-3.647 1.882 1.882 0 0 0 .357-1.711Z"
                    fill="#FFB573"
                />
                <Path
                    d="M292.499 103.26c4.935 2.19 9.457 7.407 13.16 17.061-1.184 3.976-13.414 10.49-13.414 10.49s-15.256-32.345.254-27.551Z"
                    fill="#646FD4"
                />
                <Path
                    d="M251.675 115.621c.047 3.581-5.884 11.881.94 16.694.592 7.248 1.391 14.382 2.942 26.273h36.5c-3.468-13.16-.47-21.996 5.095-45.12a8.9 8.9 0 0 0-7.745-11.064 107.003 107.003 0 0 0-4.569-.347 115.86 115.86 0 0 0-16.581 0c-1.796.159-3.648.385-5.424.629a13.039 13.039 0 0 0-11.158 12.935Z"
                    fill="#646FD4"
                />
                <Path
                    d="M263.763 112.133c.085 2.689 0 5.264 0 7.896 0 2.632-.169 5.236-.338 7.868a126.862 126.862 0 0 1-1.88 15.905c-.113.667-.291 1.363-.451 2.04-.16.677-.301 1.353-.517 2.068l-.301 1.043-.16.527c-.06.236-.136.468-.225.695a11.227 11.227 0 0 1-1.598 2.82 31.098 31.098 0 0 1-2.999 3.356c-.987.987-1.993 1.88-3.008 2.82a106.52 106.52 0 0 1-12.709 9.4 2.762 2.762 0 0 1-4.233-2.343c0-.662.238-1.301.671-1.802 3.355-3.826 6.815-7.624 10.039-11.384.789-.94 1.56-1.88 2.293-2.82a22.738 22.738 0 0 0 1.88-2.641c.226-.348.367-.771.245-.536s0-.122 0-.226l.084-.413.179-.818c.132-.526.207-1.119.301-1.692s.207-1.147.263-1.748c.639-4.747.94-9.748 1.119-14.749a507.12 507.12 0 0 0 .319-15.04 5.512 5.512 0 0 1 1.573-3.92 5.517 5.517 0 0 1 9.463 3.798l-.01-.104Z"
                    fill="#FFB573"
                />
                <Path
                    d="M259.74 103.523c-4.502 2.237-8.967 6.58-10.819 16.525 1.175 3.939 17.268 11.525 17.268 11.525s8.958-33.803-6.449-28.05Z"
                    fill="#646FD4"
                />
                <Path
                    d="M260.727 79.468c.122.705-.16 1.363-.63 1.448-.47.085-.94-.404-1.062-1.119-.122-.714.169-1.363.63-1.447.461-.085.949.404 1.062 1.118Z"
                    fill="#263238"
                />
                <Path d="m259.9 78.34-1.795-.15s1.081 1.156 1.795.15Z" fill="#263238" />
                <Path
                    d="M260.558 80.258a19.92 19.92 0 0 1-1.795 5.038 3.11 3.11 0 0 0 2.632 0l-.837-5.038Z"
                    fill="#ED893E"
                />
                <Path
                    d="M258.866 74.618a.44.44 0 0 1-.291-.113.416.416 0 0 1-.093-.464.411.411 0 0 1 .093-.137 4.32 4.32 0 0 1 3.675-1.392.413.413 0 0 1 .329.49.445.445 0 0 1-.508.347 3.47 3.47 0 0 0-2.895 1.137.441.441 0 0 1-.31.132Z"
                    fill="#263238"
                />
                <Path
                    d="M283.992 72.466c.94 8.836 1.504 12.558-2.096 17.86-5.424 8.037-16.328 7.52-19.834-.78-3.158-7.52-4.145-20.68 3.713-25.813a11.672 11.672 0 0 1 16.207 3.043 11.676 11.676 0 0 1 2.01 5.69Z"
                    fill="#FFB573"
                />
                <Path
                    d="M267.918 78.923c-5.64-.996-7.003-7.473-4.916-10.293-9.503.423-15.905-10.208-5.64-16.271 10.265-6.063 19.326 3.328 18.593 6.871 12.643-1.146 20.05 9.26 13.16 16.995 9.09 1.476 22.701 11.722 12.709 22.485 13.508 1.984 14.974 44.284-21.799 36.764-38.765-7.934-5.085-41.67-5.085-41.67s-9.823-2.764-7.022-14.88Z"
                    fill="#263238"
                />
                <Path
                    d="m303.93 101.464-.799-.488c3.412-5.546 3.976-10.594 1.673-15.04-2.961-5.64-10.143-8.968-15.717-9.288l.056-.94c5.828.33 13.377 3.76 16.498 9.786 2.425 4.7 1.833 10.208-1.711 15.97Z"
                    fill="#263238"
                />
                <Path
                    d="M293.242 77.175c3.243-.536 1.711-5.828-.677-7.229-2.388-1.4-13.827.874-12.568 4.522 1.26 3.647 8.893 3.43 13.245 2.707Z"
                    fill="#fff"
                />
                <Path
                    d="M293.825 75.84c3.233-.62 1.936-4.907-.489-6.251-2.425-1.344-12.418-.348-11.055 3.252 1.363 3.6 7.22 3.854 11.544 2.999Z"
                    fill="#646FD4"
                />
                <Path
                    d="M259.947 69.702a9.726 9.726 0 0 1-5.95-2.134c-2.698-2.096-4.183-5.236-3.76-8 .254-1.757 1.353-4.173 5.189-5.705l.347.874c-2.707 1.081-4.295 2.82-4.606 4.963-.338 2.444 1.006 5.236 3.441 7.125a8.267 8.267 0 0 0 8.253 1.373l.357.874a8.46 8.46 0 0 1-3.271.63Z"
                    fill="#263238"
                />
                <Path
                    d="M270.146 79.957c-.423 2.313-.555 3.3-1.758 4.38a2.547 2.547 0 0 1-4.446-1.663c-.188-2.125.536-5.546 2.688-6.26 2.153-.715 3.939 1.24 3.516 3.543Z"
                    fill="#FFB573"
                />
                <Path
                    d="m264.957 87.317-.761-1.363a.368.368 0 0 1 0-.366l.761-1.354a.379.379 0 0 1 .329-.194.377.377 0 0 1 .329.194l.762 1.354a.369.369 0 0 1 0 .366l-.762 1.363a.37.37 0 0 1-.329.194.377.377 0 0 1-.329-.194Z"
                    fill="#fff"
                />
                <Path
                    d="M255.576 158.56s-1.288 47.132-3.008 78.133c-1.824 28.454-4.164 94.996-4.164 94.996l7.191.376s15.905-55.996 15.237-89.826c18.669-47.32 11.957-82.26 11.957-82.26l-27.213-1.419Z"
                    fill="#FFB573"
                />
                <Path
                    d="M248.94 328.7a.945.945 0 0 0-1.1 0 20.13 20.13 0 0 1-11.929 3.967c-4.775.207-3.6 2.82 3.234 3.694 8.037.996 9.757 2.651 12.351 3.299 2.595.649 4.653-1.325 4.606-6.777a.937.937 0 0 0-.601-.855 31.33 31.33 0 0 1-6.561-3.328Z"
                    fill="#263238"
                />
                <Path
                    d="M265.117 158.56s13.16 55.78 20.783 81.78c8.019 27.26 14.373 89.469 14.326 91.528h6.223s8.037-50.422-1.88-91.556c-.94-66.74-12.446-81.705-12.446-81.705l-27.006-.047Z"
                    fill="#FFB573"
                />
                <Path
                    d="M300.066 329.64a.807.807 0 0 0-.94.244c-1.607 2.087-2.773 4.4-7.52 6.43-3.929 1.673-1.758 3.967 4.39 3.13 7.229-.996 7.332.179 9.767.179 2.434 0 3.581-2.425 1.804-7.699a.993.993 0 0 0-.789-.677 28.542 28.542 0 0 1-6.712-1.607ZM255.576 158.56s-6.204 41.304-5.33 97.76a199.383 199.383 0 0 0 57.876-8.93s.282-73.151-16.046-88.802c-9.428-2.538-36.284-.855-36.5-.028Z"
                    fill="#263238"
                />
                <Path
                    opacity={0.2}
                    d="M256.3 248.302a.236.236 0 0 1-.235-.226c-1.758-36.049 2.51-86.94 2.547-87.42a.218.218 0 0 1 .023-.09.227.227 0 0 1 .056-.074.233.233 0 0 1 .175-.052.233.233 0 0 1 .161.082c.02.024.035.051.045.08a.24.24 0 0 1 .01.092c-.047.517-4.305 51.371-2.547 87.42a.223.223 0 0 1-.012.092.223.223 0 0 1-.214.152l-.009-.056Z"
                    fill="#fff"
                />
                <Path opacity={0.2} d="m280.862 212.253 5.349-28.332 2.152 6.778-7.501 21.554Z" fill="#000" />
                <Path
                    d="M319.56 338.244c0 .132-65.274.245-145.766.245-80.492 0-145.794-.113-145.794-.245 0-.131 65.264-.244 145.794-.244 80.53 0 145.766.122 145.766.244Z"
                    fill="#263238"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" transform="translate(-55)" d="M0 0h470v359H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    );
};
