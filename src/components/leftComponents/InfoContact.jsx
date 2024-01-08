import { PhoneOutlined, MailOutlined, HomeOutlined, GithubFilled } from '@ant-design/icons';

export default function InfoContact() {
    return (
        <div className="infoContact">
            <div className="title">
                <h2>Thông tin liên hệ</h2>
            </div>
            <div className='content'>
                <i class="fa-solid fa-venus-mars"></i> Nam<br />
                <i class="fa-solid fa-cake-candles"></i> 12/08/1997<br />
                <i class="fa-solid fa-phone"></i> 0925161365<br />
                <i class="fa-solid fa-envelope"></i> vutranthanhtam120897@gmail.com<br />
                <i class="fa-solid fa-location-dot"></i> TanBinh, TPHCM
            </div>
        </div>

    )
}