import React from 'react'
import Link from 'next/link'

export default function GameServer() {
    return (
        <section className='ptb-120'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <div className="text-center mb-5">
                            <h2 className='text-white mb-3'>Most Popular Game Servers</h2>
                            <p className='text-off-white'>Give your Website the speed, security, and uptime it deserves and become part of the fastest Web Hosting Hostim.</p>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                        <div className="server-left position-relative z-5">
                            <div className="server-list mb-3">
                                <Link href='/'>
                                    <a className='text-decoration-none'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/server/s1.png" className='img-fluid me-3' alt="server" />
                                            <h5 className='m-0 text-white fw-medium'>7 Days to Die</h5>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="server-list mb-3">
                                <Link href='/'>
                                    <a className='text-decoration-none'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/server/s2.png" className='img-fluid me-3' alt="server" />
                                            <h5 className='m-0 text-white fw-medium'>Ark Survival Evolved</h5>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="server-list mb-3">
                                <Link href='/'>
                                    <a className='text-decoration-none'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/server/s3.png" className='img-fluid me-3' alt="server" />
                                            <h5 className='m-0 text-white fw-medium'>Counter Strike GO</h5>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <div className="server-list mb-3">
                                <Link href='/'>
                                    <a className='text-decoration-none'>
                                        <div className='d-flex align-items-center'>
                                            <img src="/server/s4.png" className='img-fluid me-3' alt="server" />
                                            <h5 className='m-0 text-white fw-medium'>Call of Duty</h5>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                            <img
                                src="/circle.png"
                                className="server-circle z-2"
                                alt="cicle"
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="game-card">
                            <div className="card-top">
                                <img src="/server/card-img.png"
                                    className='img-fluid w-100' alt="game" />
                                <h4 className='mt-4 mb-3'>Battlefield Bad Company-2
                                    Ranked Servers.</h4>
                                <p className='m-0 text-off-white'>Our custom control panel allows you to configure and customize & Administrators.</p>
                            </div>
                            <div className="card-bottom">
                                <Link href="/" >
                                    <a className='d-flex justify-content-between'>From $6.00/GB Per Month
                                        <img src="/server/arrows.svg" alt="" /></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="server-list mb-3">
                            <Link href='/'>
                                <a className='text-decoration-none'>
                                    <div className='d-flex align-items-center'>
                                        <img src="/server/s5.png" className='img-fluid me-3' alt="server" />
                                        <h5 className='m-0 text-white fw-medium'>7 Days to Die</h5>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="server-list mb-3">
                            <Link href='/'>
                                <a className='text-decoration-none'>
                                    <div className='d-flex align-items-center'>
                                        <img src="/server/s6.png" className='img-fluid me-3' alt="server" />
                                        <h5 className='m-0 text-white fw-medium'>Ark Survival Evolved</h5>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="server-list mb-3">
                            <Link href='/'>
                                <a className='text-decoration-none'>
                                    <div className='d-flex align-items-center'>
                                        <img src="/server/s1.png" className='img-fluid me-3' alt="server" />
                                        <h5 className='m-0 text-white fw-medium'>Unreal Tournament 3 </h5>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className="server-list mb-3">
                            <Link href='/'>
                                <a className='text-decoration-none'>
                                    <div className='d-flex align-items-center'>
                                        <img src="/server/s8.png" className='img-fluid me-3' alt="server" />
                                        <h5 className='m-0 text-white fw-medium'>Garry's Mod</h5>
                                    </div>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center align-items-center mt-4">
                    <div className="col-lg-4 col-md-7">
                        <div className="game-server-lists d-flex align-items-center justify-content-between">
                            <div className='d-none d-md-block'>
                                <img src="/server/c-arrow.png" alt="shape" />
                            </div>
                            <ul className='list-unstyled d-flex game-img'>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e1.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e2.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e3.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href='/'>
                                        <a>
                                            <img src="/server/e4.png" alt="game" />
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                            <Link href='/'>
                                <a className="fw-medium text-white">More Games</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
