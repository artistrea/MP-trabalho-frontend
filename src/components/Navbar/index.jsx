import './styles.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export function Navbar({headerText, headerSubtext, upperLinkObject, backofficeLinkObject, type}) {
    return (
        /* upperLinkObject define os links no canto superior direito,
        com formato [{ title: 'title1', href: 'href1', active: true }, { title: 'title2', href: 'href2', active: false } ...];
        active determina se o link sera destacado ou nao. exemplo:
        [{ title: 'backoffice', href: '#', active: true }, { title: 'meus pedidos', href: '#', active: false }]
        backofficeLinkObject define os links da barra do menu de backoffice, e tem o mesmo formato de upperLinkObject.
        type determina algumas mudancas no style da navbar e pode
        ser uma das duas strings "restaurant" ou "backoffice" */
        <div>
            <div className='navbar_header' id={type}>
                <div className='logo'>
                    dinnerdash
                </div>
                <div className='header_text_and_subtext_div'>
                    <div className={'header_text_' + type}>
                        {headerText}
                    </div>
                    <div className={'header_subtext_' + type}>
                        {headerSubtext}
                    </div>
                </div>

                <div className='link_div'>
                    {upperLinkObject.map((linkData) => (
                        <NavLink 
                          key={linkData.title}
                          to={linkData.href} 
                          className={linkData.active ? 'link_active' : 'link_inactive'}
                        >
                            {linkData.title}
                        </NavLink>
                    ))}
                </div>
            </div>
            <div>
                {type==='backoffice' && 
                    <div className='backoffice_bar'>
                        <div className='backoffice_link_div'>
                            {backofficeLinkObject.map((linkData) => (
                                <NavLink 
                                  key={linkData.title}
                                  to={linkData.href} 
                                  className={linkData.active ? 'backoffice_link_active' : 'backoffice_link_inactive'}
                                >
                                    {linkData.title}
                                </NavLink>
                            ))}
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}